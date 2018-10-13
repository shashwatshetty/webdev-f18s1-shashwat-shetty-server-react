import React from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleAdd from "./ModuleAdd";

const ModuleList = ({course, modules, updateForm, selectModule, addModule, deleteModule, updateModule}) =>
    <div>
        <ModuleAdd
            updateForm={updateForm}
            updateModule={updateModule}
            addModule={addModule}/>
        <ul className="nav flex-column nav-pills">
            {
                modules.map((module, key) =>
                    <ModuleListItem
                        key={key}
                        course={course}
                        module={module}
                        selectModule={selectModule}
                        deleteModule={deleteModule}/>
                )}
        </ul>
    </div>;

export default ModuleList