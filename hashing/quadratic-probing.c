#include <stdio.h>
#include <string.h>

#define TABLE_SIZE 10
#define EMPTY_SLOT ""

char hashTable[TABLE_SIZE][20];

// Simple hash function
int hashFunction(char *str) {
    int sum = 0;
    for (int i=0; str[i]!='\0'; i++)
        sum += str[i];
    return sum % TABLE_SIZE;
}

// Insert with quadratic probing
void insert(char *key) {
    int hash = hashFunction(key);
    int i = 0;
    int index;

    while (i < TABLE_SIZE) {
        index = (hash + i * i) % TABLE_SIZE;
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
