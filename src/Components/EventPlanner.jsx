import React from "react";
import "./EventPlanner.css"; // Import CSS file for styling

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      <header>
        <h1>Welcome to Event Planner</h1>
      </header>
      <div className="event-planner-container">
        <header>
          <h1>イベントプランナーへようこそ</h1>
        </header>
        <section className="description">
          <p>
            Event
            Plannerを使って、イベントを簡単に計画・整理しましょう。誕生日から企業の会議まで、あなたをサポートします。
          </p>

          <button className="get-started-button">始める</button>
        </section>
        <section className="events_categories">
          <ul>
            <h2>Social Events:</h2>
            <li>Birthday parties</li>
            <li>Anniversary celebrations</li>
            <li>Wedding receptions</li>
            <li>Baby showers</li>
            <li>Graduation parties</li>
            <li>Family reunions</li>
          </ul>
          <ul>
            <h2> Entertainment Events:</h2>
            <li>Concerts</li>
            <li>Music festivals</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
          </ul>
          <ul>
            <h2>Community Events:</h2>
            <li>Fundraising events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Community festivals</li>
            <li>Cultural celebrations</li>
          </ul>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Easy event creation and management</li>
            <li>Customizable event templates</li>
            <li>Guest list management</li>
            <li>Real-time collaboration</li>
            <li>Reminders and notifications</li>
          </ul>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>
              "Event Planner made organizing my wedding a breeze. Highly
              recommended!"
            </p>
            <p className="author">- Emily Johnson</p>
          </div>
        </section>
        <section className="contact">
          <h2>お問い合わせ</h2>
          <form>
            <input type="text" placeholder="名前" />
            <input type="email" placeholder="メール" />
            <textarea placeholder="メッセージ"></textarea>
            <button className="submit-button">送信</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EventPlanner;
