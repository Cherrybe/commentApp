function getInitials(name) {
  if (!name) return ""; // Handle empty or undefined input

  const nameParts = name.split(" ");

  // Extract first character of the first name
  const firstInitial = nameParts[0].charAt(0);

  // Extract first character of the last name if it exists
  const lastInitial =
    nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";

  // Combine initials and return in uppercase
  return (firstInitial + lastInitial).toUpperCase();
}

export default getInitials;