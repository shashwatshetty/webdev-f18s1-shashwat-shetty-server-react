import React from 'react'

const TopicPillItem = ({key, topic, selectedTopic, selectTopic, deleteTopic}) =>
    <li id={key} className="nav-item">
        <a onClick={() => selectTopic(topic)}
           className="nav-link">
            {topic.title}
            &nbsp;&nbsp;
            <a onClick={() => deleteTopic(topic)}>
                <i className="fa fa-window-close"/>
            </a>
        </a>
    </li>;

export default TopicPillItem