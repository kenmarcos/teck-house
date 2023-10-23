const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-muted">
      <div className="container px-7 py-4">
        <p className="text-[10px] text-muted-foreground">
          © {currentYear} Copyright Teck House
        </p>
      </div>
    </footer>
  );
};

export default Footer;
