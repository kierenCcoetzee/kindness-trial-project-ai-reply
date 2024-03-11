export async function readEmailsDTO<T>(): Promise<T> {
  try {
    const response = await fetch("http://localhost:3000/api/emails.json");

    if (!response.ok) {
      throw new Error(
        `Failed to fetch the JSON file. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Error fetching or validating JSON file:",
      (error as any).message
    );
    throw error;
  }
}
