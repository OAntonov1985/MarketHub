

export default function GetInputInfo(event) {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    // clearImmediate()
    HTMLFormElement.reset();
    // console.log('Form Data:', formData);
}