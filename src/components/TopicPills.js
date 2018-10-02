import React from 'react'

const TopicPills = () =>
    <div className="form-group">
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active">
                    Chapter-1
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    Chapter-2
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    Chapter-3
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    Chapter-4
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">
                    Chapter-5
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    Add
                </a>
            </li>
        </ul>
    </div>

export default TopicPills