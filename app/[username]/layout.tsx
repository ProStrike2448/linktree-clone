import Login from "@/components/login";

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    username: string;
  };
}) {
  // URL -> /n1ck0laj
  // `params` -> { username: 'n1ck0laj' }
  return <section>{children}</section>;
}
