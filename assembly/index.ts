import {Context, storage} from "near-sdk-as";

class Greating {
    getGreeting(accounId : string): string | null {
        return storage.get<string>(accounId, "Greeting not available");
    }
    setGreeting(greeting: string): void {
        storage.set(Context.sender, greeting);
    }
}