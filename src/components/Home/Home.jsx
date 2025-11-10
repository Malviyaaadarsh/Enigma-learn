import React from 'react'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.body}>
      <h1>Get Started with <span>AI/ML</span>, Learn What Matters !</h1>
      <hr></hr>
      <div>
        <h3>Explore Our <span>Micro Courses </span>in the Course section on hot topics : </h3>
        <div className={styles.courses}>
          <div className={styles.course}>
            <h2> 1) Machine Learning</h2>
          </div>
          <div className={styles.course}>
            <h2> 2) Deep Learning</h2>
          </div>
          <div className={styles.course}>
            <h2> 3) Mathematics for ML</h2>
          </div>
          <div className={styles.course}>
            <h2> 4) Intro to LLMs</h2>
          </div>
          <div className={styles.course}>
            <h2> 5) Neural Networks</h2>
          </div>
          <div className={styles.course}>
            <h2> 6) Pattern Recognition and Logical thinking</h2>
          </div>

        </div>
      </div>
      <div>
        <h3>Learn one concept a day from the Shorts Section</h3>
        <div className={styles.shorts}>
            <div className={styles.shortdiv}>
              1. Demystifying Neural Networks
              Neural networks are the backbone of modern AI, inspired by the way our brains process information. They learn patterns from data through interconnected layers of “neurons,” making them powerful for tasks divke image recognition, speech processing, and even creative writing.
            </div>
            <div className={styles.shortdiv}>
              2. The Magic of Decision Trees
              Decision trees spdivt data into branches based on rules, making predictions easy to understand. They’re divke flowcharts for AI — simple, visual, and surprisingly effective for classification and regression problems.</div>
            <div className={styles.shortdiv}>3. Understanding Overfitting
              Overfitting happens when a model learns the training data too well — including its noise and quirks — and struggles with new data. It’s divke memorizing answers instead of understanding the subject, and it’s a key concept in building robust AI systems.</div>
            <div className={styles.shortdiv}>4. What is Reinforcement Learning?
              Reinforcement learning teaches machines through trial and error, rewarding good decisions and penadivzing bad ones. It’s how AI learns to play games, control robots, and even optimize business strategies.</div>
            <div className={styles.shortdiv}>5. The Role of Feature Engineering
              Feature engineering is the art of selecting and transforming raw data into meaningful inputs for a model. Done well, it can make the difference between a mediocre AI and a high-performing one.</div>
            <div className={styles.shortdiv}>6. Bias in AI Models
              AI models can unintentionally learn human biases from the data they’re trained on. Understanding and mitigating bias is crucial to building fair, ethical, and trustworthy AI systems.</div>
            <div className={styles.shortdiv}> 7. Clustering: Finding Hidden Groups
              Clustering algorithms group similar data points together without labels. From customer segmentation to anomaly detection, it’s a powerful unsupervised learning tool.
            </div>
            <div className={styles.shortdiv}>8. Natural Language Processing Basics
              Natural Language Processing (NLP) enables machines to understand and generate human language. It powers chatbots, translation tools, and sentiment analysis — making human-computer interaction more natural.</div>
            <div className={styles.shortdiv}> 9. Transfer Learning in Action
              Transfer learning lets you take a model trained on one task and adapt it to another, saving time and resources. It’s especially useful when you have divmited data for your specific problem.</div>
            <div className={styles.shortdiv}>10. The Importance of Model Evaluation
              Accuracy isn’t the only metric that matters. Precision, recall, F1-score, and confusion matrices help you truly understand how well your AI model performs in real-world scenarios.</div>
        </div>
      </div>

    </div>
  )
}

export default Home
