export function rejectError(
  error: unknown,
  rejectWithValue: (value: string) => any,
) {
  if (error instanceof Error) {
    return rejectWithValue(error.message);
  }

  return rejectWithValue("Произошла ошибка");
}
