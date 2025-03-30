

function Title({TAG, COLOR, children, ...props}) {
    return <TAG id='title' {...props} style={{color: COLOR}}>{children}</TAG>
  
} export default Title