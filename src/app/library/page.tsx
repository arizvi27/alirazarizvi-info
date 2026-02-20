type Book = {
  title: string;
  author: string;
  note?: string;
  year?: number;
};

const books: Book[] = [
  {
    title: "Computer Architecture: A Quantitative Approach",
    author: "John Hennessy & David Patterson",
    note: "The bible for thinking about PPA trade-offs and memory hierarchies.",
    year: 2017
  },
  {
    title: "1984",
    author: "George Orwell",
    note: "Reminder of why thoughtful tech governance matters.",
    year: 1949
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    note: "On the costs of complacency and the value of curiosity.",
    year: 1953
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    note: "Systems thinking and improvisation under pressure—fun and inspiring.",
    year: 2011
  }
];

export default function LibraryPage() {
  return (
    <div className="section stack">
      <div className="section-head">
        <p className="eyebrow">Library</p>
        <h1>Books that stuck with me.</h1>
        <p className="lede">
          A short shelf of reads I revisit. I’ll keep adding to this as I finish
          new ones.
        </p>
      </div>

      <div className="library">
        {books.map((book) => (
          <article key={book.title} className="library-item">
            <div>
              <h3>{book.title}</h3>
              <p className="muted">
                {book.author} {book.year ? `• ${book.year}` : ""}
              </p>
            </div>
            {book.note ? <p className="note">{book.note}</p> : null}
          </article>
        ))}
      </div>
    </div>
  );
}
