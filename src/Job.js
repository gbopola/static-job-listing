import './Job.css';

function Job({profileImg, companyName, position, newPost, featured,
     postedAt, contract, location, role, level, languages, tools, addFilter}){
    return (
        <div className="Jobcard">
            <div className="left-info">
            <img className="company-img" src={profileImg} />
            <div className="job-info">
                <div className="top-info">
                    <p className="company-name">{companyName}</p>
                    <p className={newPost && "new"}>{newPost && "NEW!"}</p>
                    <p className={featured && "featured"}>{featured && "FEATURED"}</p>
                </div>
                <h3>{position}</h3>
                <div className="bottom-info">
                    <span>{postedAt}</span>
                    <span> . {contract} . </span>
                    <span>{location}</span>
                </div>
            </div>
            </div>
            <div className="rule"></div>
            <div className="right-info">
                 <p onClick={addFilter}>{role}</p>
                 <p onClick={addFilter}>{level}</p>
                 {languages.map(lang => <p onClick={addFilter}>{lang}</p>)}
                 {tools.map(tool => <p onClick={addFilter}>{tool}</p>)}
            </div>
        </div>
    )
}

export default Job;