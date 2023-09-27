"use client";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
