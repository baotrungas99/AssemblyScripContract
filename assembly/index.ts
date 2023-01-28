import {Context, storage} from "near-sdk-as";

class Greating {
    getGreeting(accountId : string): string | null {
        return storage.get<string>(accountId, "Greeting not available");
    }
    setGreeting(greeting: string): void {
        storage.set(Context.sender, greeting);
    }
}