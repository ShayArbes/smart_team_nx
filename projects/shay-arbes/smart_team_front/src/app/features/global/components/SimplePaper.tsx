import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
function SimplePaper() {
  return (
    <Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          direction: "rtl",
        }}
      >
        <MonetizationOnIcon fontSize="large"/>
        <StoreIcon fontSize="large"/>
        <PeopleIcon fontSize="large"/>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          direction: "rtl",
        }}
      >
        <Paper sx={{ padding: "20px 30px", margin: "24px", width: "24%" }}>
          <Typography variant="h4" color="initial">
            חסכון משתלם{" "}
          </Typography>
          <Typography sx={{ marginTop: "10px", direction: "rtl" }} variant="body1" color="initial">
            smart team מציע דרך מבריקה לחסוך המון כסף בקניות. האתר מאפשר רכישות קבוצתיות שבהן ככל שיותר אנשים מצטרפים, כך ההנחה גדלה והופכת ליותר כדאית. פשוט עקבו אחר העסקאות השונות, מצאו משהו שאתם
            רוצים והצטרפו לרכישה המשותפת. גם אם אף עסקה פעילה לא מתאימה לכם, תמיד תוכלו ליזום בעצמכם רכישה קבוצתית חדשה. עם מגוון רחב של עסקאות ואופציה ליצור רכישה עצמאית, smart team מבטיח חיסכון עצום
            בכל קנייה.
          </Typography>
        </Paper>
        <Paper sx={{ padding: "20px 30px", margin: "24px", width: "24%" }}>
          <Typography variant="h4" color="initial">
            קידום מכירות חכם{" "}
          </Typography>
          <Typography sx={{ marginTop: "10px", direction: "rtl" }} variant="body1" color="initial">
            אתה מוכר? smart team יכול לעזור לך לקדם מכירות בצורה יעילה. פשוט צרו "טיזר" - עסקת רכישה קבוצתית עם הנחה שתיפתח רק אם מספיק אנשים יצטרפו. ככל שיותר משתתפים, כך גדל הסיכוי שהעסקה תצא לפועל.
            בנוסף לקידום מכירות, זה גם קמפיין שיווקי מצוין לחשיפת המותג שלכם. עם קהל גדול של קונים פוטנציאליים, זה הדרך לשווק ולמכור ביעילות וללא צורך בהשקעה גדולה בפרסום.
          </Typography>
        </Paper>
        <Paper sx={{ padding: "20px 30px", margin: "24px", width: "24%" }}>
          <Typography variant="h4" color="initial">
            חוויית קנייה מהנה{" "}
          </Typography>
          <Typography sx={{ marginTop: "10px", direction: "rtl" }} variant="body1" color="initial">
            אתה אוהב עסקאות ומבקש חוויית קנייה מהנה? smart team בשבילך. תוכלו למצוא מאות עסקאות מדהימות וליהנות מהנחות בלעדיות. בנוסף, האתר מאפשר לכם ליזום רכישות משותפות של מוצרים שאתם רוצים במחיר
            מוזל. ככל שיהיו יותר משתתפים, כך תוכלו לבקש הנחה גדולה יותר מהמוכרים. קהילה תוססת, עסקאות בלעדיות ואפשרות ליצור רכישות קבוצתיות - הכל במקום אחד.{" "}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default SimplePaper;
