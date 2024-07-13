
import earth from "../assets/earth.png";
import clock from "../assets/clock.png";
import "../styles/JobDetail.css";
function JobDetail({job}) {
 
  return (
        <div className="JobDetailContainer">
          <div className="JobDetailTitle-Type-Time">
            <div className="title-type">
              <h2 className="title">{job.title}</h2>
              <button className="type">{job.type}</button>
            </div>
            <div className="time">
              <img src={clock} alt="" className="timeImage" />
              <span className="timeText">{job.created_at.slice(0, 10)}</span>
            </div>
          </div>
          <div className="JobDetailLogo-Company-Location">
            <img src={job.url} alt="" className="logo" />
            <div className="company-location">
              <h2 className="company">{job.company}</h2>
              <div className="location">
                <img src={earth} alt="" className="locationImage" />
                <span className="locationText">{job.location}</span>
              </div>
            </div>
          </div>
          <div
            className="JobDetailText"
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></div>
        </div>
      
  );
}

export default JobDetail;
