import React from 'react'

class Toolbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="Toolbar">
                {this.props.filters.map((e) => (
                    <button 
                    className="button" 
                    onClick={(e)=> this.props.onSelectFilter(e.target.innerText)}>
                        {e}
                    </button>
                ))}
            </div>
        )
    }
}

export default Toolbar;