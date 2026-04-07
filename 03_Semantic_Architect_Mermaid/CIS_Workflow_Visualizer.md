# 🗺️ Mermaid.js Visualization Standards

Όταν ζητείται οπτικοποίηση, χρησιμοποίησε το παρακάτω στυλ:

```mermaid
graph TD
    Start((START)) --> Proc[Process Step]
    Proc --> Dec{Decision?}
    Dec -- Yes --> Win[Success]
    Dec -- No --> Fail[Retry]