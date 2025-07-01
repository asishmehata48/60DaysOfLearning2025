#include <stdio.h>
#include <string.h>

#define TABLE_SIZE 10
#define EMPTY_SLOT ""

// Hash table stores strings or EMPTY_SLOT if empty
char hashTable[TABLE_SIZE][20]; // fixed size strings

// Simple hash function: sum of chars % table size
int hashFunction(char *str) {
    int sum = 0;
    for (int i = 0; str[i] != '\0'; i++) {
        sum += str[i];
    }
    return sum % TABLE_SIZE;
}

// Insert key using linear probing
void insert(char *key) {
    int index = hashFunction(key);
    int originalIndex = index;
    int i = 0;

    // Find empty slot or update existing slot
    while (strcmp(hashTable[index], EMPTY_SLOT) != 0) {
        index = (originalIndex + ++i) % TABLE_SIZE;
        if (index == originalIndex) {
            printf("Hash table is full! Cannot insert '%s'\n", key);
            return;
        }
    }

    strcpy(hashTable[index], key);
    printf("Inserted '%s' at index %d\n", key, index);
}

// Print the hash table content
void printHashTable() {
    printf("\nHash Table:\n");
    for (int i = 0; i < TABLE_SIZE; i++) {
        if (strcmp(hashTable[i], EMPTY_SLOT) == 0)
            printf("Index %d: (empty)\n", i);
        else
            printf("Index %d: %s\n", i, hashTable[i]);
    }
}

int main() {
    // Initialize hash table with empty strings
    for (int i = 0; i < TABLE_SIZE; i++) {
        strcpy(hashTable[i], EMPTY_SLOT);
    }

    // Insert keys
    insert("apple");
    insert("banana");
    insert("grape");
    insert("orange");
    insert("melon");
    insert("lemon");  // May cause collision

    printHashTable();

    return 0;
}
