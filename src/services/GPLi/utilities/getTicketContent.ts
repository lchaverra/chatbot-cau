export function getTicketContent(problem: string): string {
  switch (problem) {
    case "Internet":
      return "Internet";
    case "VPN":
      return "VPN";
    case "Phone Theft":
      return "Robo o Perdida de Celular";
    case "Computer Theft":
      return "Robo o Perdida de Computador";
    case "Room Reservation":
      return "Reserva de Sala";
    case "CAU":
      return "Acceso al CAU";
    case "Licenses":
      "Solicitud de Licencia(s) de Software";
    case "Drive":
      return "Problemas con sincronización del Drive";
    case "Password":
      return "Problemas con cambio de contraseña";
    default:
      return "Unknown";
  }
}
