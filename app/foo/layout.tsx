export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-8 flex space-x-2 text-xl">
      {children}
    </div>
  );
}
