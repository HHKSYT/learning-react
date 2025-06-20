

function Button( {onLoginToggle} ) {
    const styles = {
        background: "#203491",
        color: "white",
        padding: "20px 10px",
        borderRadius: "15px",
        border: "none",
        cursor: "pointer",
    };
    return(
        <button style={styles} onClick={onLoginToggle}>Click me</button>
    );
}


export default Button