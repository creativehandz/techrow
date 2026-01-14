import './Button.css';

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
  imageOnLeft?: boolean;
  linkedinUrl?: string;
}

const TeamMember = ({ 
  imageSrc, 
  name, 
  position, 
  description, 
  imageOnLeft = false,
  linkedinUrl
}: TeamMemberProps) => {
  return (
    <div className={imageOnLeft ? "team-grid-reverse" : "team-grid"}>
      {/* Mobile Layout: Always Image First */}
      <div className="md:hidden">
        {/* Image First on Mobile */}
        <div className="flex justify-center team-grid-column mb-6">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-auto max-w-md team-image-tilt"
          />
        </div>
        {/* Text Second on Mobile */}
        <div className="text-white team-grid-column">
          <div className="flex items-center mb-2">
            {linkedinUrl ? (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img src="/media/images/icons/linked-in-icon.png" alt="LinkedIn" className="w-7 mr-2 hover:opacity-80 transition-opacity cursor-pointer" />
              </a>
            ) : (
              <img src="/media/images/icons/linked-in-icon.png" alt="LinkedIn" className="w-7 mr-2" />
            )}
            <h3 className="team-member-name">
              {linkedinUrl ? (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>
            <img src="/media/images/icons/chat-quote.png" alt="Quote" className="w-6 h-6 ml-2" />
          </div>
          <p className="team-position mb-4">
            {position}
          </p>
          <p className="team-description leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Desktop Layout: Respect imageOnLeft prop */}
      <div className="hidden md:contents">
        {imageOnLeft ? (
          <>
            {/* Image First - 40% */}
            <div className="flex justify-center team-grid-column">
              <img 
                src={imageSrc} 
                alt={name}
                className={imageOnLeft ? "team-image-tilt-right" : "team-image-tilt"}
              />
            </div>
            {/* Text Second - 60% */}
            <div className="text-white team-grid-column">
              <div className="flex items-center mb-2">
                {linkedinUrl ? (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <img src="/media/images/icons/linked-in-icon.png" alt="LinkedIn" className="w-7 mr-2 hover:opacity-80 transition-opacity cursor-pointer" />
                  </a>
                ) : (
                  <img src="/media/images/icons/linked-in-icon.png" alt="LinkedIn" className="w-7 mr-2" />
                )}
                <h3 className="team-member-name">
                  {linkedinUrl ? (
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                      {name}
                    </a>
                  ) : (
                    name
                  )}
                </h3>
                <img src="/media/images/icons/chat-quote.png" alt="Quote" className="w-6 h-6 ml-2" />
              </div>
              <p className="team-position mb-4">
                {position}
              </p>
              <p className="team-description leading-relaxed">
                {description}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Text First - 60% */}
            <div className="text-white team-grid-column">
              <div className="flex items-center mb-2">
                {linkedinUrl ? (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <img src="/media/images/icons/linked-in-icon.png" alt="LinkedIn" className="w-7 mr-2 hover:opacity-80 transition-opacity cursor-pointer" />
                  </a>
                ) : (
                  <img src="/media/images/icons/linked-in-icon.png" alt="LinkedIn" className="w-7 mr-2" />
                )}
                <h3 className="team-member-name">
                  {linkedinUrl ? (
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                      {name}
                    </a>
                  ) : (
                    name
                  )}
                </h3>
                <img src="/media/images/icons/chat-quote.png" alt="Quote" className="w-6 h-6 ml-2" />
              </div>
              <p className="team-position mb-4">
                {position}
              </p>
              <p className="team-description leading-relaxed">
                {description}
              </p>
            </div>
            {/* Image Second - 40% */}
            <div className="flex justify-center team-grid-column">
              <img 
                src={imageSrc} 
                alt={name}
                className={imageOnLeft ? "team-image-tilt-right" : "team-image-tilt"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TeamMember;