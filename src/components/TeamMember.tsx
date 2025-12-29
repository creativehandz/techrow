import './Button.css';

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
  imageOnLeft?: boolean;
}

const TeamMember = ({ 
  imageSrc, 
  name, 
  position, 
  description, 
  imageOnLeft = false 
}: TeamMemberProps) => {
  return (
    <div className={imageOnLeft ? "team-grid-reverse" : "team-grid"}>
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
              <img src="/media/images/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5 mr-2" />
              <h3 className="team-member-name">
                {name}
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
              <img src="/media/images/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5 mr-2" />
              <h3 className="team-member-name">
                {name}
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
  );
};

export default TeamMember;