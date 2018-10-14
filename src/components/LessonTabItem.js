import React from 'react'

const LessonTabItem = ({key, lesson, selectedLesson, selectLesson, deleteLesson}) =>
    <li id={key} className="nav-item">
        <a className={(selectedLesson === lesson) ? "nav-link active" : "nav-link"}
           onClick={() => selectLesson(lesson)}>
            {lesson.title}
            &nbsp;&nbsp;
            <a onClick={() => deleteLesson(lesson)}>
                <i className="fa fa-window-close"/>
            </a>
        </a>
    </li>;

export default LessonTabItem