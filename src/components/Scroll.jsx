
export default function Scroll (props) {
    return (
        <div style={{overflowY: 'auto', border: '3px solid black', height: '65vh'}}>
            {props.children}
        </div>
    )
}