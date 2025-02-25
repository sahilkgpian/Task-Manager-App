import Input from './Input.jsx';
import {useRef}from 'react';
import Modal from './Modal.jsx';
export default function NewProject({onAdd,onCancel})
{
    const modal=useRef();
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();
    const endDate=useRef();
    const option=useRef();
    const st=useRef();
    const et=useRef();
    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        const enteredendDate = endDate.current.value;
        const enteredOption=option.current.value;
        const enteredSt=st.current.value;
        const enteredEt=et.current.value;
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
          }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
            endDate: enteredendDate,
            option:enteredOption,
            st:enteredSt,
            et:enteredEt
          });
    
    }

    return <> 
    <Modal ref={modal} buttonCaption="okay">
        <h2>Invalid input</h2>
    </Modal>
    <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                    Cancel
                </button>
            </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handleSave}>
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Name of Task Setter"/>
            <Input ref={description} label="Task Title" textarea />
            <Input type="date"ref={dueDate} label="Task added on"/>
            <Input type="time" ref={st} label="Task Start Time"/>
            <Input type="date"ref={endDate} label="Task Deadline"/>
            <Input type="time" ref={et} label="Task End Time"/>
            <select ref={option} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600">
            <option value="" disabled selected>Choose Priority Level</option>
            <option value="Low Priority">Low Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="High Priority">High Priority</option>
            </select>

        </div>
    </div>
    </>
}