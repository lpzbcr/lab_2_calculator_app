function History({ history, clearHistory }) {
    return (
      <div className="history"> {/* History section */}
        <h3>History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
        <button onClick={clearHistory} className="clear-history">Clear History</button> {/* Clear history button */}
      </div>
    );
}
  
export default History;