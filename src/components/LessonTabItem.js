import React from 'react'

const LessonTabItem = ({lesson, key}) =>
    <li id={key} className="nav-item">
        <button className="nav-link active">
            {lesson.title}
        </button>
    </li>

export default LessonTabItem