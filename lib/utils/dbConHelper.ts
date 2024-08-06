import connectMongo from "@/dbConnect";

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

export function withDb<T>(func: AsyncFunction<T>): AsyncFunction<T> {
  return async (...args: any[]): Promise<T> => {
    await connectMongo();
    return func(...args);
  };
}
