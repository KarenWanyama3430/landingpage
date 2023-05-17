function getElementSize(ref){

 const newWidth = ref.current.clientWidth;

 const newHeight = ref.current.clientHeight;
 return {newHeight,newWidth}
}