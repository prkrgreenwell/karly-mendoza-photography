import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, asPath } = router;

  const switchLocale = (newLocale: string) => {
    router.push(pathname, asPath, { locale: newLocale });
  };

  return (
    <Button onClick={() => switchLocale(locale === "en" ? "es" : "en")}>
      {locale === "en" ? "Español" : "English"}
    </Button>
  );
};

export default LanguageSwitcher;
