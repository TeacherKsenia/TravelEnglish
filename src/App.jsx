import React from 'react'

function App() {
  const handleBooking = () => {
    alert("Запись на курс!\n\nСвяжемся с вами\n+7 (916) 777-88-99")
  }

  const program = [
    { title: "Аэропорт без стресса", desc: "Регистрация, паспортный контроль, таможня — всё на английском." },
    { title: "В отеле: заселение и помощь", desc: "Сменить номер, Wi-Fi, уборка — вежливые фразы." },
    { title: "Кафе и рестораны", desc: "Заказ еды, аллергены, счёт, чаевые." },
    { title: "На улице: ориентирование", desc: "Спросить дорогу, вызвать такси, найти аптеку." },
    { title: "Экстренные случаи", desc: "Потеря вещей, болезнь, полиция — важные фразы." },
    { title: "Туризм и развлечения", desc: "Билеты, экскурсии, гиды, музеи." },
    { title: "Дружба в путешествиях", desc: "Как знакомиться за границей. Игровая практика." },
    { title: "Дипломный проект", desc: "«Мой идеальный отпуск» — презентация на английском." }
  ]

  return (
    <div className="container">
      {/* Шапка */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>
          <span className="gradient-text">Английский</span><br />
          для путешествий
        </h1>
        <p style={{ fontSize: '1.1rem', margin: '1rem auto', maxWidth: '700px' }}>
          Реальный разговорный английский для отпуска и будущих приключений.
          От заказа кофе до поиска утраченного чемодана.
        </p>
        <button className="btn" onClick={handleBooking}>
          Записаться на курс →
        </button>
      </div>

      {/* Для кого */}
      <div className="card">
        <h2>📌 Для кого курс</h2>
        <div className="grid">
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h3>4–5 класс</h3>
            <p>Первая группа · Младшие подростки</p>
          </div>
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h3>6–8 класс</h3>
            <p>Вторая группа · Разговорный интенсив</p>
          </div>
        </div>
      </div>

      {/* Программа */}
      <div className="card">
        <h2>📚 Программа курса</h2>
        <div className="grid">
          {program.map((item, i) => (
            <div className="program-item" key={i}>
              <strong>{item.title}</strong>
              <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Расписание и стоимость */}
      <div className="card">
        <div className="grid">
          <div>
            <h3>🕒 Расписание (МСК)</h3>
            <p><strong>Четверг, 15:00</strong> — 4–5 класс</p>
            <p><strong>Пятница, 15:30</strong> — 6–8 класс</p>
          </div>
          <div>
            <h3>💳 Стоимость</h3>
            <div className="price-card">
              <div className="price">12 000 ₽</div>
              <p>Полный курс (10 уроков)</p>
            </div>
            <div className="price-card" style={{ marginTop: '1rem' }}>
              <div className="price">1 300 ₽</div>
              <p>Абонемент / урок</p>
            </div>
          </div>
        </div>
      </div>

      {/* Набор открыт */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>📢 Набор открыт!</h2>
        <p>Группы максимум 6 детей. Места ограничены!</p>
        <button className="btn" onClick={handleBooking} style={{ marginTop: '1rem' }}>
          Записаться на курс
        </button>
      </div>

      {/* Подвал */}
      <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>© 2025 Английский для путешествий</p>
      </footer>
    </div>
  )
}

export default App