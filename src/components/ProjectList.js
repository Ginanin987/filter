import React from 'react'

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-img">
                {this.props.projects.map((element)=>(
                    <img
                        src={element.img}
                        alt="project image"
                        className="project-img"
                    />
                ))
                }
            </div>
        )
    }
}

export default Projects;