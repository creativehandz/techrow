<?php
// Server Test Script for TechRow Fund
echo "<h1>Server Configuration Test</h1>";

echo "<h2>Apache Modules</h2>";
if (function_exists('apache_get_modules')) {
    $modules = apache_get_modules();
    echo in_array('mod_rewrite', $modules) ? "✅ mod_rewrite: ENABLED<br>" : "❌ mod_rewrite: DISABLED<br>";
    echo in_array('mod_mime', $modules) ? "✅ mod_mime: ENABLED<br>" : "❌ mod_mime: DISABLED<br>";
} else {
    echo "⚠️ Cannot detect Apache modules<br>";
}

echo "<h2>PHP Info</h2>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";

echo "<h2>File System</h2>";
echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "<br>";
echo "Script Name: " . $_SERVER['SCRIPT_NAME'] . "<br>";

echo "<h2>.htaccess Test</h2>";
if (file_exists('.htaccess')) {
    echo "✅ .htaccess file exists<br>";
    echo "File size: " . filesize('.htaccess') . " bytes<br>";
    echo "Last modified: " . date('Y-m-d H:i:s', filemtime('.htaccess')) . "<br>";
    echo "<h3>.htaccess Content:</h3>";
    echo "<pre>" . htmlspecialchars(file_get_contents('.htaccess')) . "</pre>";
} else {
    echo "❌ .htaccess file NOT found<br>";
}

echo "<h2>Directory Contents</h2>";
$files = scandir('.');
foreach($files as $file) {
    if ($file != '.' && $file != '..') {
        echo $file . "<br>";
    }
}
?>