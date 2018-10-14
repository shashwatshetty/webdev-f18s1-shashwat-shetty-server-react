import React from 'react'
import TopicPillItem from "./TopicPillItem";

const TopicPills = ({topics, selectedTopic, updateForm, selectTopic, addTopic, deleteTopic, updateTopic}) =>
    <ul className="nav nav-pills">
        <li className="nav-item">
            <input
                onChange={updateForm}
                placeholder="Add/Update Lesson"
                className="form-control"/>
        </li>
        <li className="nav-item">
            <a
                onClick={() => addTopic()}
                className="nav-link">
                <i className="fa fa-plus"/>
            </a>
        </li>
        <li className="nav-item">
            <a onClick={() => updateTopic()}
               className="nav-link">
                <i className="fa fa-check"/>
            </a>
        </li>
        {
            topics.map((topic, key) =>
                <TopicPillItem
                    key={key}
                    topic={topic}
                    selectedTopic={selectedTopic}
                    selectTopic={selectTopic}
                    deleteTopic={deleteTopic}/>
            )
        }
    </ul>;

export default TopicPills