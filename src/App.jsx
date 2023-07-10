import './App.css';
import './styles/result.scss';
import { useEffect, useState } from 'react';

export default function App() {
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/resultData.json');
        const data = await response.json();
        setResultData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Render null or loading state until data is fetched
  if (!resultData) {
    return null; // You can render a loading spinner or placeholder here
  }

  return (
    <div className="component-styles">
      <div className="top-section">
        <p className="top-text">Your Result</p>
        <div className="oval">
          <p className="result-top">76</p>
          <p className="result-bottom">of 100</p>
        </div>
        <h2 className="text-element-great">Great</h2>
        <p className="text-element-performance">
          Your performance exceeds 65% of the people conducting the test here!
        </p>
      </div>
      <div className="bottom-section">
        <h4 className="summary">Summary</h4>
        {resultData.map((category, index) => (
          <div key={index} className="category-element">
            <div className="icon-name-wrapper">
              <img
                src={category.icon}
                alt={category.category}
                className="icon"
              />
              <p className="category-name">{category.category}</p>
            </div>
            <p className="category-score">
              {category.score} <span className="percentage">/ 100</span>
            </p>
          </div>
        ))}
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}
