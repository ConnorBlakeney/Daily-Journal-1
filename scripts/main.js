import EntryListComponent from "./JournalEntryList.js";
import { getEntries } from "./JournalDataProvider.js";
import { JournalFormComponent } from "./form/journalForm.js";
import { journalEdit } from "./JournalEdit.js";

JournalFormComponent()

getEntries().then(() => EntryListComponent()) 

journalEdit()