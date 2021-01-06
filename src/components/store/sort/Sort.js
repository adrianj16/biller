import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="store-filter clearfix">
            <div className="store-grid">
                <label>
                    Sort By:
                    <select className="input-select">
                        <option value="0">Popular</option>
                        <option value="1">Position</option>
                    </select>
                </label>

                <label>
                    Show:
                    <select className="input-select">
                        <option value="0">20</option>
                        <option value="1">50</option>
                    </select>
                </label>
            </div>
        </div>
        );
    }
}

export default Sort;
