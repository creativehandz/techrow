<?php
// TechRow Fund SPA Router - No .htaccess required
// This file handles all routing for the React SPA

// Get the requested path
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);

// Remove leading/trailing slashes and get the path components
$path = trim($path, '/');
$pathSegments = explode('/', $path);

// Static file extensions that should be served directly
$staticExtensions = ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'mp4', 'webm', 'pdf', 'json'];

// Check if this is a request for a static file
$pathInfo = pathinfo($path);
$extension = isset($pathInfo['extension']) ? strtolower($pathInfo['extension']) : '';

// If requesting a static file that exists, serve it
if ($extension && in_array($extension, $staticExtensions)) {
    $filePath = __DIR__ . '/' . $path;
    if (file_exists($filePath)) {
        // Set appropriate MIME type and serve the file
        $mimeTypes = [
            'css' => 'text/css',
            'js' => 'application/javascript', 
            'json' => 'application/json',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'mp4' => 'video/mp4',
            'webm' => 'video/webm',
            'pdf' => 'application/pdf'
        ];
        
        if (isset($mimeTypes[$extension])) {
            header('Content-Type: ' . $mimeTypes[$extension]);
        }
        
        // Special handling for video files to support mobile streaming
        if (in_array($extension, ['mp4', 'webm'])) {
            $fileSize = filesize($filePath);
            $start = 0;
            $end = $fileSize - 1;
            
            // Detect mobile devices for optimized streaming
            $isMobile = preg_match('/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i', $_SERVER['HTTP_USER_AGENT'] ?? '');
            
            // Handle range requests for video streaming (essential for mobile)
            if (isset($_SERVER['HTTP_RANGE'])) {
                $ranges = explode('=', $_SERVER['HTTP_RANGE']);
                $range = $ranges[1];
                $ranges = explode('-', $range);
                $start = intval($ranges[0]);
                if (!empty($ranges[1])) {
                    $end = intval($ranges[1]);
                }
                
                header('HTTP/1.1 206 Partial Content');
                header('Accept-Ranges: bytes');
                header("Content-Range: bytes $start-$end/$fileSize");
                header('Content-Length: ' . ($end - $start + 1));
            } else {
                header('Accept-Ranges: bytes');
                header('Content-Length: ' . $fileSize);
                
                // Mobile-specific headers for better video performance
                if ($isMobile) {
                    header('Cache-Control: public, max-age=3600'); // Shorter cache for mobile
                    header('X-Content-Type-Options: nosniff');
                    header('Connection: keep-alive');
                }
            }
            
            // Set mobile-optimized buffer size
            $buffer = $isMobile ? 1024 * 4 : 1024 * 8; // 4KB for mobile, 8KB for desktop
            
            // Open file and seek to start position
            $fp = fopen($filePath, 'rb');
            fseek($fp, $start);
            
            // Output the requested range with mobile optimization
            while (!feof($fp) && ($pos = ftell($fp)) <= $end) {
                if ($pos + $buffer > $end) {
                    $buffer = $end - $pos + 1;
                }
                echo fread($fp, $buffer);
                
                // For mobile devices, flush more frequently
                if ($isMobile) {
                    flush();
                    // Small delay to prevent overwhelming mobile networks
                    usleep(1000); // 1ms delay
                }
            }
            fclose($fp);
        } else {
            // Set cache headers for non-video static files
            if (in_array($extension, ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf'])) {
                header('Cache-Control: public, max-age=31536000'); // 1 year
            }
            readfile($filePath);
        }
        exit;
    }
}

// For all other requests (React routes like /about, /fund-gala, etc.), serve the React app
if (file_exists(__DIR__ . '/app.html')) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile(__DIR__ . '/app.html');
    exit;
}

// Fallback 404
header('HTTP/1.0 404 Not Found');
echo '<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 - Page Not Found</h1></body></html>';
?>