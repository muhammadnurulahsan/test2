import React from 'react';
import './QaAns.css'

const QaAns = () => {
    return (


            
       <div>
           <h2 className='text-center py-5'>FQA?</h2>
            <div className='container'>
            <div class=" accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <h2> How React Work</h2>
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <p>
         React uses a virtual DOM, which is a JS version of a DOM tree. As a
         result, it will use the virtual representation of the DOM when reading
         or writing to it. The virtual DOM will then attempt to update the
         browser's DOM in the most efficient manner possible. React elements,
        unlike browser DOM elements, are simple objects that are easy to
         generate. The DOM is updated to match the React elements by React DOM.
         The reason for this is that JS is really fast, thus it's worthwhile to
         have a DOM tree in it to speed up operations. Although React was
         designed to be used in the browser, it can also be utilized in the
         server using Node.js due to its design.
      </p></div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <h2>Difference between props and state</h2>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">  <p>
            Props and state are linked. A component's state will frequently become
            the props of a child component. Props are supplied to the child as the
            second parameter in the parent's render method. Data is passed from
            one component to another using props. The state is a type of local
            data storage that can only be accessed by the component and cannot be
            shared with other components.
          </p> </div>
          </div>
        </div>
      </div>
        </div>
       </div>

    );
};

export default QaAns;