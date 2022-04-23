let fileHandle;

async function openFile(){
    [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    textarea.innerText = text;
}

async function saveFile(){
    let stream = await fileHandle.createWritable();
    await stream.write(textarea.innerText);
    await stream.close();
}

async function saveAsFile(){
    file = await window.showSaveFilePicker();
    save();
}