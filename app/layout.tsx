

import "./globals.css";

export const metadata = {
title: "Sanity Exchange - Premium Gift Card Trading",
description: "Global Gift Card Trading Made Simple",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>{children}</body>
</html>
  );
  }