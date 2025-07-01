#include <stdio.h>
#include <string.h>

#define TABLE_SIZE 10

// Simple hash function: sum of chars % table size
int hashFunction(char *str) {
    int sum = 0;
    for (int i = 0; str[i] != '\0'; i++) {
        sum += str[i];
    }
    return sum % TABLE_SIZE;
}

int main() {
    char *hashTable[TABLE_SIZE];
    // Initialize hash table with NULL
    for (int i = 0; i < TABLE_SIZE; i++) {
        hashTable[i] = NULL;
    }

    // Sample strings to insert
    char *strings[] = {"apple", "banana", "grape", "orange", "melon"};
    int n = sizeof(strings) / sizeof(strings[0]);

    // Insert strings into hash table
    for (int i = 0; i < n; i++) {
        int index = hashFunction(strings[i]);
        // Simple collision handling: overwrite (for demo only)
        hashTable[index] = strings[i];
        printf("Inserted '%s' at index %d\n", strings[i], index);
    }

    // Print the hash table content
    printf("\nHash Table:\n");
    for (int i = 0; i < TABLE_SIZE; i++) {
        if (hashTable[i] != NULL)
            printf("Index %d: %s\n", i, hashTable[i]);
        else
            printf("Index %d: (empty)\n", i);
    }

    return 0;
}
