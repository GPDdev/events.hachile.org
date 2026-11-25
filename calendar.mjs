// RFC 5545 content lines are limited to 75 octets including continuation whitespace.
function fold(line) {
  const encoder = new TextEncoder();
  const lines = [];
  let part = "", bytes = 0;
  for (const char of line) {
    const size = encoder.encode(char).length;
    if (bytes + size > 75) { lines.push(part); part = " "; bytes = 1; }
    part += char;
    bytes += size;
  }
  lines.push(part);
  return lines.join("\r\n");
}
function icsText(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}
function utc(value) { return new Date(value).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"; }
export function makeCalendar(items, updated) {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Hachile Events//Campus Calendar//ZH", "CALSCALE:GREGORIAN"];
  const generated = utc(updated);
  for (const event of items) {
    lines.push("BEGIN:VEVENT", "UID:" + event.id + "@events.hachile.org", "DTSTAMP:" + generated);
    if (event.start.length === 10) {
      const end = new Date((event.end || event.start).slice(0, 10) + "T00:00:00Z");
      end.setUTCDate(end.getUTCDate() + 1);
      lines.push("DTSTART;VALUE=DATE:" + event.start.replaceAll("-", ""), "DTEND;VALUE=DATE:" + end.toISOString().slice(0, 10).replaceAll("-", ""));
    } else {
      lines.push("DTSTART:" + utc(event.start));
      if (event.end && Date.parse(event.end) > Date.parse(event.start)) lines.push("DTEND:" + utc(event.end));
    }
    lines.push("SUMMARY:" + icsText(event.title + "（" + event.stage + "）"), "DESCRIPTION:" + icsText(event.note));
    if (event.source) lines.push("URL:" + new URL(event.source).href);
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.map(fold).join("\r\n") + "\r\n";
}
