import React from 'react';

const FormErrors = ({ errors }) => (
  <div className='formErrors'>
    {Object.keys(errors).map((fieldName, i) => {
      if(errors[fieldName].length > 0){
        return (
          <p className="errors-panel" key={i}> {errors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
    </div>
)

export default FormErrors;


// const FormErrors = ({ errors }) => (
//   <div className='formErrors'>
//     {Object.keys(errors).map((fieldName, i) => {
//       if(errors[fieldName].length > 0){
//         return (
//           <p className="errors-panel" key={i}> {errors[fieldName]}</p>
//         )        
//       } else {
//         return '';
//       }
//     })}
//     </div>
// )
