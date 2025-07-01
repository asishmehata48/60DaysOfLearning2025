#include <stdio.h>
#include <string.h>

#define TABLE_SIZE 11    // Preferably a prime number for double hashing
#define EMPTY_SLOT ""

char hashTable[TABLE_SIZE][20];

// First hash function
int hash1(char *str) {
    int sum = 0;
    for (int i=0; str[i]!='\0'; i++)
        sum += str[i];
    return sum % TABLE_SIZE;
}

// Second hash function (must not return 0)
int hash2(char *str) {
    int sum = 0;
    for (int i=0; str[i]!='\0'; i++)
        sum += str[i];
    // Use a prime smaller than TABLE_SIZE, e.g., 7
    return 7 - (sum % 7);
}

// Insert with double hashing
void insert(char *key) {
    int h1 = hash1(key);
    int h2 = hash2(key);
    int i = 0;
    int index;

    while (i < TABLE_SIZE) {
        index = (h1 + i * h2) % TABLE_SIZE;
        if (strcmp(hashTable[index], EMPTY_SLOT) == 0) {
            strcpy(hashTable[index], key);
            printf("Inserted '%s' at index %d\n", key, index);
            return;
        }
        i++;
    }

    printf("Hash table full! Cannot insert '%s'\n", key);
}

void printHashTable() {
    printf("\nHash Table:\n");
    for (int i=0; i<TABLE_SIZE; i++) {
        if (strcmp(hashTable[i], EMPTY_SLOT) == 0)
            printf("Index %d: (empty)\n", i);
        else
            printf("Index %d: %s\n", i, hashTable[i]);
    }
}

int main() {
    for (int i=0; i<TABLE_SIZE; i++)
        strcpy(hashTable[i], EMPTY_SLOT);

    insert("apple");
    insert("banana");
    insert("grape");
    insert("orange");
    insert("melon");
    insert("lemon");

    printHashTable();
    return 0;
}
