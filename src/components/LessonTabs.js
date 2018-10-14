import React from 'react'
import LessonTabItem from "./LessonTabItem";

const LessonTabs = ({lessons, selectedLesson, updateForm, selectLesson, addLesson, editLesson, deleteLesson, updateLesson}) =>
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <input
                onChange={updateForm}
                placeholder="Add/Update Lesson"
                className="form-control"/>
        </li>
        <li className="nav-item">
            <a
                onClick={() => addLesson()}
                className="nav-link active">
                <i className="fa fa-plus"/>
            </a>
        </li>
        <li className="nav-item">
            <a onClick={() => updateLesson()}
                    className="nav-link active">
                <i className="fa fa-check"/>
            </a>
        </li>
        {
            lessons.map((lesson, key) => {
                return (
                        <LessonTabItem
                            key={key}
                            lesson={lesson}
                            selectedLesson={selectedLesson}
                            selectLesson={selectLesson}
                            deleteLesson={deleteLesson}/>
                    )
                }
            )
        }
    </ul>

export default LessonTabs