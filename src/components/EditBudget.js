import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);

    
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
                min="0"
                max={ {max: 3 }}
                step="10"
				onChange={(event) => setValue(event.target.value)}

			/>
             {/* <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div> */}
			<button
				type='button'
				class='btn btn-primary'
                
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;