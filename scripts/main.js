import EntryListComponent from "./JournalEntryList.js";
import { getEntries } from "./JournalDataProvider.js";
import { JournalFormComponent } from "./form/journalForm.js";
import { journalEdit } from "./JournalEdit.js";
import { moodFilter } from "./filters/moodFilter.js";

JournalFormComponent()
getEntries().then(() => EntryListComponent()) 
journalEdit()
moodFilter()

