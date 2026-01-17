import './globals.css';  // Add this line

export const metadata = {
  title: "LegalEase - Legal Document Summarizer",
  description: "Upload legal documents and get AI-powered summaries in plain English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}